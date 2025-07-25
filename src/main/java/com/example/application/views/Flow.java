package com.example.application.views;

import com.example.application.components.AcmeCard;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Main;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility;

@PageTitle("Flow")
@Route(value = "flow")
@Menu(title = "Flow")
public class Flow extends Main {

    public Flow() {

        var verticalLayout = new VerticalLayout();
        verticalLayout.setMargin(true);
        verticalLayout.setSpacing(true);

        verticalLayout.add(new H2("Existing AcmeCard instances"));

        var horizontalLayout = new HorizontalLayout();

        var card1 = new AcmeCard();
        card1.setTitle("Card 1");
        card1.setSubtitle(new Span("Looks cool"));
        card1.add(new Paragraph("This is a card 1"));

        var card2 = new AcmeCard();
        card2.setTitle("Card 2");
        card2.setSubtitle(new Span("Looks cool"));
        card2.add(new Paragraph("This is a card 2"));

        var card3 = new AcmeCard();
        card3.setTitle("Card 3");
        card3.setSubtitle(new Span("Looks cool"));
        card3.add(new Paragraph("This is a card 3"));

        horizontalLayout.add(card1, card2, card3);
        horizontalLayout.addClassNames(LumoUtility.Gap.MEDIUM);

        verticalLayout.add(horizontalLayout);

        verticalLayout.add(new H2("Paste your Figma components below"));

        add(verticalLayout);
    }
}
