package com.example.application.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.card.Card;

import java.util.Collection;

/**
 * For simplification Vaadin Card is used
 * as a base for AcmeCard custom component.
 */
public class AcmeCard extends Card {

    @Override
    public void setTitle(String title) {
        super.setTitle(title);
    }

    @Override
    public Component getTitle() {
        return super.getTitle();
    }

    public void setDescription(Component subtitle) {
        super.setSubtitle(subtitle);
    }

    public Component getDescription() {
        return super.getSubtitle();
    }

    @Override
    public void add(Collection<Component> components) {
        super.add(components);
    }
}
