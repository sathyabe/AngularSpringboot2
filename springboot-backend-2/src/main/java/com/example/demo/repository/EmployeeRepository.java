package com.example.demo.repository;

//package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
