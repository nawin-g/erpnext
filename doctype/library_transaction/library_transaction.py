# Copyright (c) 2024, naveen and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime

class LibraryTransaction(Document):
	pass
	# def validate(self):
	# 	loan=(
	# 	frappe.db.get_singles_value("Library Settings","loan_period"))
	# 	loan=str(loan)
	# 	a = str(self.return_date)
		#b = str(self.issue_date)
		
		# #if self.return_date:
		# returndate=datetime.strptime(self.return_date, "%Y-%m-%d")
		# issuedate=datetime.strptime(self.issue_date, "%Y-%m-%d")
		# totaldays= returndate-issuedate
		# totaldays=str(totaldays)
		
		# if totaldays > loan:
		# 	frappe.throw('Return date exceeds the limit')

		# fine=(
		# frappe.db.get_singles_value("Library Settings","fine_amount"))
		
		

	
		# if self.return_date:
		# 	if self.due_date:
		# 		return_date = datetime.strptime(self.return_date, "%Y-%m-%d")
		# 		due_date = datetime.strptime(self.due_date, "%Y-%m-%d")
		# 		delta = return_date - due_date
		# 		if delta.days > 0:
		# 			days_late = delta.days
		# 			finee = days_late * fine
		# 			self.fine_amount=finee
					#frappe.msgprint(("The fine for the book being returned late is {0}".format(finee)))

