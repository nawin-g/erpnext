# Copyright (c) 2024, naveen and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Article(Document):
	
	pass

	# @frappe.whitelist()
	# def update_copies(docname):
	# 	book = frappe.get_doc('Article', docname)

	# 	# Calculate available copies
	# 	total_available_copies = book.total_copies - book.total_issued_copies

	# 	# Update the available copies field
	# 	frappe.db.set_value('Article', docname, 'total_available_copies', total_available_copies)

	# 	return _('Copies updated successfully.')
