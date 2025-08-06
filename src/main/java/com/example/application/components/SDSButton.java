package com.example.application.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.dom.Element;

/**
 * Simple Design System Button (simplified) In real project component library would be provided as project dependency
 */
public class SDSButton extends Component {

    public SDSButton() {
        super(new Element("sds-button"));
        applyStyles();
    }

    public String getLabel() {
        return getElement().getText();
    }

    public void setLabel(String label) {
        getElement().setText(label);
    }

    private void applyStyles() {
        getElement().getStyle().setPadding("5px 10px").setBorderRadius("5px").setBorder("1px solid #ccc")
                .setBackgroundColor("#ddd");
    }

}
