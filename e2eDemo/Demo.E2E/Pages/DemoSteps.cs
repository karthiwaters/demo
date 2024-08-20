using Demo.E2E.Common.DriverHelpers;
using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using Protractor;
using TechTalk.SpecFlow;

namespace Demo.E2E.Common
{
	[Binding]
    public class DemoSteps
    {

		[StepDefinition(@"the user goes to the FlexGrid demo")]
		public void GivenTheUserGoesToTheFlexGridDemo()
		{
			BrowserHelper.Navigate("http://localhost:4201/");
		}

		[StepDefinition(@"the browser height is set to '(.*)'")]
		public void GivenTheBrowserHeightIsSetTo(int height)
		{
			BrowserHelper.SetBrowserSize(1500, height);
		}

		[StepDefinition(@"the splitter is moved up")]
		public void GivenTheSplitterIsMovedUp()
		{
			NgWebElement splitterElement = AutomationDriver.Driver.FindElement(By.XPath("//*[@id='splitterHorizontal']/split-gutter"));
			Actions actions = new Actions(AutomationDriver.Driver);
			int move = -127; //-126 through -129 show the row distortion issue
			//int move = -131; // -131 makes rowheader be the Name cell instead of the rowheader cell with 4.
			actions.DragAndDropToOffset(splitterElement, 0, move).Perform();
		}


		[StepDefinition(@"row 3 of the top table is selected")]
		public void WhenRowOfTheTopTableIsSelected()
		{			
			NgWebElement tableElement = AutomationDriver.Driver.FindElement(By.Id("tableComponents"));
			tableElement.FindElements(By.CssSelector("div.wj-cell.wj-header"))[0].Click();
			tableElement.FindElements(By.CssSelector("div.wj-cell.wj-header"))[1].Click();
			tableElement.FindElements(By.CssSelector("div.wj-cell.wj-header"))[2].Click();
		}


		[StepDefinition(@"the user clicks on the top table's row header for row 4")]
		public void WhenTheUserClicksOnTheTopTableSRowHeaderForRow()
		{
			// NOTE: wijmo asked us to try different ways to wait before clicking the fourth row - none of these worked so I've commented them out:
			//AutomationDriver.Driver.WaitForAngular();
			//System.Threading.Thread.Sleep(5000);
			//AutomationDriver.Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
			//WebDriverWait wait = new WebDriverWait(AutomationDriver.Driver, TimeSpan.FromSeconds(5));

			NgWebElement tableElement = AutomationDriver.Driver.FindElement(By.Id("tableComponents"));
			NgWebElement rowHeader = tableElement.FindElements(By.CssSelector("div.wj-cell.wj-header"))[3];
			//wait.Until(ExpectedConditions.ElementToBeClickable(columnHeader));
			rowHeader.Click();


			// NOTE - tried using this instead of the normal click seen above - it didnt help.  Leaving it here just for debugging info
			//Actions action = new Actions(AutomationDriver.Driver);
			//action.MoveToElement(tableElement.FindElements(By.CssSelector("div.wj-cell.wj-header"))[3]).Perform(); // move to the row header
			//action.Click();
		}
	}
}
