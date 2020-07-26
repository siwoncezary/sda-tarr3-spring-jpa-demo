package pl.sda.springjpademo.service;

import pl.sda.springjpademo.entity.Person;

import java.util.stream.Stream;

public interface PersonService {
    void create(Person person);
    boolean updatePhone(long id, String newPhone);
    Stream<Person> findAll();
}
