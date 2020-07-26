package pl.sda.springjpademo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.sda.springjpademo.entity.Person;
import pl.sda.springjpademo.repository.PersonRepository;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class PersonServiceJpa implements PersonService{
    private final PersonRepository personRepository;

    @Autowired
    public PersonServiceJpa(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public void create(Person person) {
        personRepository.save(person);
    }

    @Override
    @Transactional
    public boolean updatePhone(long id, String newPhone) {
        return personRepository.findById(id).flatMap(person ->{
            person.setPhone(newPhone);
            return Optional.of(true);
        }).orElse(false);
    }

    @Override
    public Stream<Person> findAll() {
        return personRepository.findAll().stream();
    }
}
