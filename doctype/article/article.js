// Copyright (c) 2024, naveen and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Article', {

total_issued_copies(frm) {
  //  debugger;
  var  d= frm.doc.available_copies 
	d= frm.doc.total_copies - frm.doc.total_issued_copies;
    frm.set_value('total_available_copies', d);
    frm.refresh_field('total_available_copies');
}});

// frappe.ui.form.on('Article', {
//     refresh: function (frm) {
//         // Add a listener for the on_submit event
//         frm.fields_dict['total_copies'].$input.on('change', function() {
//             updateAvailableCopies(frm);
//         });
//         frm.fields_dict['total_issued_copies'].$input.on('change', function() {
//             updateAvailableCopies(frm);
//         });
//     }
// });


// function updateAvailableCopies(frm) {
//     // var total_copies = frm.doc.total_copies || 0;
//     // var total_issued_copies = frm.doc.total_issued_copies || 0;
    
//     var available_copies = frm.doc.total_copies - frm.doc.total_issued_copies;
    
//     frm.set_value('total_available_copies', available_copies);
//     frm.refresh_field('total_available_copies');
// frappe.ui.form.on('Article', {
//     refresh: function (frm) {
//         // button to update copies
//         frm.add_custom_button(__('Update Copies'), function () {
//             updateCopies(frm);
//         });
//     }
// });

// function updateCopies(frm) {
// 	debugger;
// 	var available_copies = frm.doc.total_copies - frm.doc.total_issued_copies
// 	frm.set_value('total_available_copies', available_copies);
// 	frm.refresh_field('total_available_copies');
    // frappe.call({
    //     method: 'library_management.library_management.doctype.article.article.update_copies',
    //     args: {
	// 		'doctype': 'Article',
    //         docname: frm.doc.name,
    //     },
    //     callback: function (r) {
    //         if (r.message) {
    //             frm.reload_doc();
    //             frappe.msgprint(__('Copies updated successfully.'));
    //         }
    //     }
    // });



