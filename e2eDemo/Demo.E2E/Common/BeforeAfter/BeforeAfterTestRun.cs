using TechTalk.SpecFlow;
using Demo.E2E.Common.DriverHelpers;

namespace Demo.E2E.Common
{
	[Binding]
    public class BeforeAfterTestRun 
    {
        public static string DateTimeForTestRun = string.Empty;
        [BeforeTestRun]
        public static void Setup()
        {
            BrowserHelper.LaunchBrowser("Chrome");
		}

        [AfterTestRun]
        public static void Teardown()
        {
            // commented out for now so that the row header defect can be seen
			//  BrowserHelper.EndBrowser();
        }
    }
}
