// Copyright (c) 2024, naveen and contributors
// For license information, please see license.txt


frappe.ui.form.on('Library Transaction', {
    issue_date: function(frm) {
        //debugger;

        // Fetch loan period from Library Settings
        frappe.db.get_single_value("Library Settings", "loan_period")
            .then(loan => {
                // Check if the issue_date is set and loan_period is available
                if (frm.doc.issue_date && loan) {
                    // Calculate due date based on the fetched loan period
                    var due_date = frappe.datetime.add_days(frm.doc.issue_date, loan);
                    frm.doc.due_date = due_date;
                    frm.refresh_fields('due_date');
                }
            })
            .catch(err => {
                console.error(err);
            });
    }
});

// frappe.ui.form.on('Library Transaction', {
// 	refresh: function(frm) {
// 		calculate_fine(frm);
// 	},
// 	return_date: function(frm) {
// 		calculate_fine(frm);
// 	}
// });

frappe.ui.form.on('Library Transaction', {
	refresh: function(frm) {
		calculate_fine(frm);
	},
	return_date: function(frm) {
		calculate_fine(frm);
	}
});

async function calculate_fine(frm) {
	//debugger;
	if (frm.doc.return_date && frm.doc.due_date) {
		var return_date = new Date(frm.doc.return_date);
		var due_date = new Date(frm.doc.due_date);
		var time_difference = return_date.getTime() - due_date.getTime();
		var days_late = Math.ceil(time_difference / (1000 * 3600 * 24));

		if (days_late > 0) {
			var fine_per_day= await frappe.db.get_single_value('Library Settings', 'fine_amount')
			var fine = days_late * fine_per_day;
			frm.set_value("fine_amount", fine);
		}
	}
}
// function calculate_fine(frm) {
// 	debugger;
// 	if (frm.doc.return_date && frm.doc.due_date) {
// 		var return_date = new Date(frm.doc.return_date);
// 		var due_date = new Date(frm.doc.due_date);
// 		var time_difference = return_date.getTime() - due_date.getTime();
// 		var days_late = Math.ceil(time_difference / (1000 * 3600 * 24));

// 		if (days_late > 0) {
// 			frappe.call({
// 				method: "frappe.client.get_singles_value",
// 				args: {
// 					doctype: "Library Settings",
// 					fieldname: "fine_per_day"
// 				},
// 				callback: function(r) {
// 					if (!r.exc) {
// 						var fine_per_day = r.message.fine_per_day;
// 						var fine = days_late * fine_per_day;
// 						frm.set_value("fine_amount", fine);
// 					}
// 				}
// 			});
// 		}
// 	}
// }
// frappe.ui.form.on('Library Transaction', {
//     issue_date(frm) {
// 		debugger;
// 		// var loan=(
// 			// frappe.db.get_single_value("Library Settings","loan_period"))
// 			var loan = frappe.db.get_single_value("Library Settings", "loan_period");
			
// 		// var	loan=int(loan)
//         // Check if the issue_date is set
//         if (frm.doc.issue_date) {
//             // Calculate due date as 5 days ahead
//             var due_date = frappe.datetime.add_days(frm.doc.issue_date, loan);
// 			frm.doc.due_date=due_date
//             // Set the due date field
//             //frm.set_value('due_date', due_date);
// 			frm.refresh_fields('due_date')
//     }}
// });