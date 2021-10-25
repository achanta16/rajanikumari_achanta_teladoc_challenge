package teledochomeexercise;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Radio {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
System.setProperty("webdriver.chrome.driver","C:\\Users\\achantr\\Documents\\Important\\Project\\teledochomeexercise\\chromedriver.exe");
WebDriver driver= new ChromeDriver();
driver.get("https://www.way2automation.com/angularjs-protractor/webtables/");
driver.findElement(By.xpath("//button[@class='btn btn-link pull-right']")).click();
Thread.sleep(5000);
driver.findElement(By.xpath("//label/input[@value='15']")).click();

	}

}
