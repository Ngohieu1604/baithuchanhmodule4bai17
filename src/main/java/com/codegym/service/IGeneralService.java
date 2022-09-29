package com.codegym.service;

import java.util.Optional;

public interface IGeneralService<T>{
    Iterable<T> finAll();

    Optional<T> finById(Long id);

    void save(T t);

    void remove(Long id);
}
