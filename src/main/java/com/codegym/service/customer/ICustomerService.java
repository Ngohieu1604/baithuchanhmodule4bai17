package com.codegym.service.customer;

import com.codegym.model.Customer;
import com.codegym.service.IGeneralService;

import java.util.Optional;


public interface ICustomerService extends IGeneralService<Customer> {
    Optional<Customer> findById(Long id);

    Object findAll();
}
