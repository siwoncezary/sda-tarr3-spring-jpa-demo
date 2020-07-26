package pl.sda.springjpademo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import pl.sda.springjpademo.entity.Person;
import pl.sda.springjpademo.service.PersonService;

@Controller
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/person")
    public String home(){
        Person person = Person.builder().email("marek@op.pl").name("marek").phone("555555666").build();
        personService.create(person);
        personService.findAll().forEach(System.out::println);
        personService.updatePhone(1, "456456778");
        personService.findAll().forEach(System.out::println);
        return "index";
    }
}
