package pl.sda.springjpademo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import pl.sda.springjpademo.entity.Person;
import pl.sda.springjpademo.service.PersonService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/person")
    public String personIndex(Model model){
        List<Person> persons = personService.findAll().collect(Collectors.toList());
        model.addAttribute("persons", persons);
        return "persons";
    }

    @GetMapping("/person/create")
    public String personCreate(Person person){
        return "personCreate";
    }

    @PostMapping("/person/create")
    public String handlePersonCreate(Person person){
        personService.create(person);
        return "redirect:/person";
    }

    @GetMapping("/person/edit/{personId}")
    public String personEdit(@PathVariable Long personId, Model model){
        Optional<Person> person = personService.findById(personId);
        if (person.isPresent()){
            model.addAttribute("person", person.get());
            return "editPerson";
        }
        return "redirect:/person";
    }

    @PostMapping("/person/edit")
    public String handlePersonEdit(Person person){
        Optional<Person> fromBase = personService.findById(person.getId());
        if(fromBase.isPresent()){
            personService.updateEmail(person.getId(), person.getEmail());
            personService.updateName(person.getId(), person.getName());
            personService.updatePhone(person.getId(), person.getPhone());
        }
        return "redirect:/person";
    }



}
