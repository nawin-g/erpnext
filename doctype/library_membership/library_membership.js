// Copyright (c) 2024, naveen and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function(frm) {
		//debugger;
	 var startdate=new Date()
	 frm.doc.membership_start_date=startdate
	 frm.refresh_fields('membership_start_date')
}
});

frappe.ui.form.on('Library Membership', {
	refresh :function(frm) {
		durationdate(frm);
	},
	membership_type:function(frm){
		durationdate(frm)

	},

	membership_start_date:function(frm){
		durationdate(frm)

	}
})
		
		
		
async function durationdate(frm){	
		 //debugger;
		 
		

		

		var  bbooks= await frappe.db.get_single_value("Library Settings","b_max_no_of_books")
		var  bamount= await frappe.db.get_single_value("Library Settings","b_amount")
		var  bperiod= await frappe.db.get_single_value("Library Settings","b_duration")
	
		// var gduration= await frappe.db.get_single_value('Library Settings', 'g_duration');
		// var sduration= await frappe.db.get_single_value('Library Settings', 's_duration');
		// var bduration= await frappe.db.get_single_value('Library Settings', 'b_duration');
		var d= frappe.datetime.get_today();
		//frappe.datetime.add_months(frm.doc.posting_date, -1)
		var gmonth = frappe.datetime.add_months(frm.doc.membership_start_date, gperiod);
		var smonth = frappe.datetime.add_months(frm.doc.membership_start_date, speriod);
		var bmonth = frappe.datetime.add_months(frm.doc.membership_start_date, bperiod);
		
		if ( frm.doc.membership_type=='Gold'){
			//frappe.show_progress('Loading..', 20, 100, 'Please wait');
			frappe.show_alert('Loading', 1);
			var  gbooks= await frappe.db.get_single_value("Library Settings","g_max_no_of_books")
			var  gamount= await frappe.db.get_single_value("Library Settings","g_amount")
			var  gperiod= await frappe.db.get_single_value("Library Settings","g_duration")
			frappe.show_alert('Done', 1);
			// frappe.msgprint({title: __('Please wait'),indicator: 'light blue',message: __('Loading...'),persist: true});
			frm.doc.membership_end_date=gmonth
			frm.doc.maximum_number_of_books= gbooks
			//frappe.show_progress('Loading..', 70, 100, 'Please wait');
			frm.doc. membership_amount=gamount
			frm.doc.membership_period=gperiod
			
			//frappe.msgprint(__("completed!"), __("Success"));

			frm.refresh_fields('membership_end_date')
		} else if (frm.doc.membership_type=='Silver'){
			frappe.show_alert('Loading', 1);
			var  sbooks= await frappe.db.get_single_value("Library Settings","s_max_no_of_books")
			var  samount= await frappe.db.get_single_value("Library Settings","s_amount")
			var  speriod= await frappe.db.get_single_value("Library Settings","s_duration")
			frappe.show_alert('Done', 1);
			frm.doc.membership_end_date=smonth
			frm.doc.maximum_number_of_books= sbooks
			frm.doc. membership_amount=samount
			frm.doc.membership_period=speriod
			frm.refresh_fields('membership_end_date')
		}
		else { 
			frappe.show_alert('Loading', 1);
			var  bbooks= await frappe.db.get_single_value("Library Settings","b_max_no_of_books")
			var  bamount= await frappe.db.get_single_value("Library Settings","b_amount")
			var  bperiod= await frappe.db.get_single_value("Library Settings","b_duration")
			frappe.show_alert('Done', 1);
			frm.doc.membership_end_date=bmonth
			frm.doc.maximum_number_of_books= bbooks
			frm.doc. membership_amount=bamount
			frm.doc.membership_period=bperiod
			frm.refresh_fields('membership_end_date')

		}
		
	}