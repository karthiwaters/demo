using OpenQA.Selenium.Chrome;
using Protractor;
using System;
using System.Drawing;
using System.IO;

namespace Demo.E2E.Common.DriverHelpers
{
    public class BrowserHelper
    {
         public static void InitialiseChromeDriver(string defaultDownloadFolderPath = null)
        {
            var chromeOptions = new ChromeOptions();
            if (defaultDownloadFolderPath != null)
            {
                chromeOptions.AddUserProfilePreference("download.default_directory", defaultDownloadFolderPath);
            }
            var driverPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

            // create the Selenium driver (IWebDriver) which is used to create the Protractor-net driver (NgWebDriver)
			AutomationDriver.SeleniumDriver = new ChromeDriver(driverPath, chromeOptions, TimeSpan.FromMinutes(4));		
			AutomationDriver.SeleniumDriver.Manage().Timeouts().AsynchronousJavaScript = TimeSpan.FromSeconds(30);
			
			//Sets AutomationDriver.Driver to a ngDriver for Angular Websites.
			AutomationDriver.Driver = new NgWebDriver(AutomationDriver.SeleniumDriver);
		}

        public static void Navigate(string url)
        {
            try
            {
                AutomationDriver.Driver.Navigate().GoToUrl(url);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void LaunchBrowser(string browserType, string defaultDownloadFolderPath = null)
        {
            try
            {
               InitialiseChromeDriver(defaultDownloadFolderPath);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void EndBrowser()
        {
            try
            {				
				AutomationDriver.Driver.Quit();
				AutomationDriver.Driver.Dispose();
			}
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void SetBrowserSize(int width, int height)
        {
            try
            {
                AutomationDriver.Driver.Manage().Window.Size = new Size(width, height);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}