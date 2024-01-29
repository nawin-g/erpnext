# Copyright (c) 2024, naveen and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LibraryMembership(Document):
	
	def validate(self):

		if self.amount_paid !=1:
			frappe.throw('Please Pay the Amount to Proceed')
		
		# gbooks=(
		# frappe.db.get_singles_value("Library Settings","g_max_no_of_books"))
		# gamount=(
		# frappe.db.get_singles_value("Library Settings","g_amount"))
		# gperiod=(
		# frappe.db.get_singles_value("Library Settings","g_duration"))


		
		# if self.membership_type =='Gold':
		# 	self.maximum_number_of_books= gbooks
		# 	self.membership_amount=gamount
		# 	self.membership_period=gperiod

		
		
