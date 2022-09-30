package com.codegym.service.customer;

import com.codegym.model.Customer;

import com.codegym.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ICustomerService extends IGeneralService<Customer> {
    Iterable<Customer> findAll();

    Optional<Customer> findById(Long id);

    Page<Customer> findAll (Pageable pageable);
    Page<Customer>findAllByName(String name, Pageable pageable);
}
