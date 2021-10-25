package base;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {

	public static WebDriver driver;
	public static String url;

	public static WebDriver initDriver() throws IOException {

		Properties prop=new Properties();
		String path=System.getProperty("user.dir");
		System.out.println(path);
		FileInputStream fis=new FileInputStream(path+"\\src\\test\\java\\base\\Global.properties");
		prop.load(fis);
		System.setProperty("webdriver.chrome.driver",path+"\\chromedriver.exe");
		url=prop.getProperty("url");
		driver=new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	}
}
