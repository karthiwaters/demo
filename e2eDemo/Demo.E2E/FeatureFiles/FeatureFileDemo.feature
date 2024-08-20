Feature: UI001_TableTest
	As an user
	I want to do something
	So that something 


# This moves the SPLITTER to make the table smaller
@automatedtest
Scenario: FlexGrid Demo Spliter Test
Given the user goes to the FlexGrid demo
	And the browser height is set to '1000'
	And the splitter is moved up
When row 3 of the top table is selected
	And the user clicks on the top table's row header for row 4
# This should leave the browser open and show the defect of having 
# the row headers not aligned with the rows

# This makes the BROWSER SIZE smaller to make the table smaller
@automatedtest
Scenario: FlexGrid Demo Browser Size Test
Given the user goes to the FlexGrid demo
	And the browser height is set to '725'
When row 3 of the top table is selected
	And the user clicks on the top table's row header for row 4
# This should leave the browser open and show the defect of having 
# the row headers not aligned with the rows