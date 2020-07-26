package pl.sda.springjpademo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.sda.springjpademo.entity.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
