using OpenQA.Selenium.Chrome;
using Protractor;
using System;
using System.Diagnostics;
using System.IO;

namespace Waters.CDS.E2E.Common.DriverHelpers
{
    public class BrowserHelper
    {
        /// <summary>
        /// Initialise ChromeDriver
        /// </summary>
        /// <param name="defaultDownloadFolderPath">Path to default download folder</param>
        public static void InitialiseChromeDriver(string defaultDownloadFolderPath = null)
        {
            Debug.WriteLine("InitialiseChromeDriver");
            var chromeOptions = new ChromeOptions();
            if (defaultDownloadFolderPath != null)
            {
                chromeOptions.AddUserProfilePreference("download.default_directory", defaultDownloadFolderPath);
            }
            var driverPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

            // If running via mstest, the directory will be the Out folder in the Test Results.  Need to change 
            // to the Debug Bin folder as that is where the chrome driver is located
            if (driverPath.Contains("TestResults"))
            {
                driverPath = driverPath.Remove(driverPath.IndexOf("TestResults"));
                driverPath = Path.Combine(driverPath, "Waters.CDS.E2E", "bin", "Debug");
            }

            AutomationDriver.Driver = new ChromeDriver(driverPath, chromeOptions, TimeSpan.FromMinutes(4));
            //Sets AutomationDriver.Driver to a ngDriver for Angular Websites.
            AutomationDriver.Driver = new NgWebDriver(AutomationDriver.Driver);
            AutomationDriver.Driver.Manage().Timeouts().AsynchronousJavaScript = TimeSpan.FromSeconds(30);
            AutomationDriver.Driver.Manage().Window.Maximize();
           
        }

        /// <summary>
        /// Runs the process identified by the executable and creates Application
        /// object for this executable
        /// </summary>
        /// <param name="url">Path of executable</param>
        /// <returns>White Application object</returns>
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

        /// <summary>
        /// Runs the process identified by the executable and creates Application
        /// object for this executable
        /// </summary>
        /// <param name="browserType">Path of executable</param>
        /// <param name="defaultDownloadFolderPath">Path to default download folder</param>
        /// <returns>White Application object</returns>
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

        /// <summary>
        /// Runs the process identified by the executable and creates Application
        /// object for this executable
        /// </summary>
        /// <param name="browserType">Path of executable</param>
        /// <param name="defaultDownloadFolderPath">Path to default download folder</param>
        /// <returns>White Application object</returns>
        public static void EndBrowser()
        {
            try
            {
                AutomationDriver.Driver.Quit();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}