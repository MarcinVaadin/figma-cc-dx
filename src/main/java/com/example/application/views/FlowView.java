package com.example.application.views;

import com.example.application.components.SDSButton;
import com.example.application.components.SDSCard;
import com.vaadin.flow.component.html.Main;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Flow")
@Route(value = "flow")
@Menu(title = "Flow")
public class FlowView extends Main {

    public FlowView() {

        var verticalLayout = new VerticalLayout();
        verticalLayout.setMargin(true);
        verticalLayout.setSpacing(true);

        var sdscard = new SDSCard();
        sdscard.setTitle("Great News!");
        sdscard.setBody(new Span("Did you know that Vaadin Copilot can import Figma\n"
                + "                                components such as this Simple Design System Card?"));
        var sdsbutton = new SDSButton();
        sdsbutton.setLabel("Sure!");
        sdscard.add(sdsbutton);
        verticalLayout.add(sdscard);

        verticalLayout.add(new Paragraph("Copy and paste card from Figma and see the results!"));

        add(verticalLayout);
    }
}
