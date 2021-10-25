package StepDefinitions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",
glue={"StepDefinitions"},
plugin = {"pretty", "html:target/cucumber.html" },
monochrome = true
)
public class TestRunner {

}
