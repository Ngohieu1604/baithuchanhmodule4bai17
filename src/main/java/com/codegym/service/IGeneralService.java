package com.codegym.service;

import com.codegym.model.Customer;

import java.util.Optional;

public interface IGeneralService<T>{
    Iterable<T> finAll();

    Optional<T> finById(Long id);

    Customer save(T t);

    void remove(Long id);
}
