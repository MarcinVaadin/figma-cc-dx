package com.example.application.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.dom.Style;

/**
 * Simple Design System Card (simplified) In real project component library would be provided as project dependency
 */
@Tag("sds-card")
public class SDSCard extends Component {

    private Span title = new Span();

    private Div bodyWrapper = new Div();

    private Div childrenWrapper = new Div();

    private Icon icon = VaadinIcon.INFO_CIRCLE_O.create();

    public SDSCard() {
        getElement().appendChild(icon.getElement());
        getElement().appendChild(title.getElement());
        getElement().appendChild(bodyWrapper.getElement());
        getElement().appendChild(childrenWrapper.getElement());
        applyStyles();
    }

    public String getTitle() {
        return title.getText();
    }

    public void setTitle(String title) {
        this.title.setText(title);
    }

    public Component getBody() {
        return bodyWrapper.getComponentCount() > 0 ? bodyWrapper.getComponentAt(0) : null;
    }

    public void setBody(Component body) {
        this.bodyWrapper.removeAll();
        this.bodyWrapper.add(body);
    }

    public void add(Component component) {
        childrenWrapper.add(component);
    }

    private void applyStyles() {
        getElement().getStyle().setDisplay(Style.Display.FLEX).setFlexDirection(Style.FlexDirection.COLUMN)
                .setMaxWidth("300px").setBorderRadius("10px").setBorder("1px solid #ccc")
                .setPosition(Style.Position.RELATIVE).setPadding("25px 25px 25px 50px")
                .setAlignItems(Style.AlignItems.START).setTextAlign(Style.TextAlign.LEFT).set("gap", "10px");
        title.getStyle().setFontSize("16px").setFontWeight("bold");
        bodyWrapper.getStyle().setColor("#666");
        icon.getStyle().setPosition(Style.Position.ABSOLUTE).setTop("25px").setLeft("16px");
    }
}
