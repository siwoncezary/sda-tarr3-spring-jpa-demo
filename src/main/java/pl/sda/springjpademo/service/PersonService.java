package pl.sda.springjpademo.service;

import pl.sda.springjpademo.entity.Person;

import java.util.Optional;
import java.util.stream.Stream;

public interface PersonService {
    void create(Person person);
    boolean updatePhone(long id, String newPhone);
    boolean updateName(long id, String name);
    boolean updateEmail(long id, String email);
    Stream<Person> findAll();
    Optional<Person> findById(long id);

}
