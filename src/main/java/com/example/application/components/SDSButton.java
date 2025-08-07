package com.example.application.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;

/**
 * Simple Design System Button (simplified) In real project component library would be provided as project dependency
 */
@Tag("sds-button")
public class SDSButton extends Component {

    public SDSButton() {
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
