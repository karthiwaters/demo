using OpenQA.Selenium;
using Protractor;

namespace Demo.E2E.Common.DriverHelpers
{
    public class AutomationDriver
    {
		/// <summary>
		/// Exposes the Selenium IWebDriver of the initialized Browser.
		/// </summary>
		public static IWebDriver SeleniumDriver { get; set; }

		/// <summary>
		/// Exposes the Protractor-net NgWebDriver of the initialized Browser.
		/// </summary>
		public static NgWebDriver Driver { get; set; }
    }
}
