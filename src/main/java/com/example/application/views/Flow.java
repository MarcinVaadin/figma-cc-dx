package com.example.application.views;

import com.vaadin.flow.component.html.Main;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.theme.lumo.LumoUtility;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.Menu;

@PageTitle("Flow")
@AnonymousAllowed
@Route(value = "flow")
@Menu(title = "Flow")
public class Flow extends Main {

    private final HorizontalLayout horizontalLayout;

    private final TextField name;

    private final Button sayHello;

    public Flow() {
        horizontalLayout = new HorizontalLayout();
        name = new TextField("Your name");
        name.setHelperText("Write your name here");
        sayHello = new Button("Say hello");
        sayHello.addClickListener(e -> {
            Notification.show("Hello " + name.getValue());
        });
        sayHello.addClickShortcut(Key.ENTER);
        horizontalLayout.setMargin(true);
        horizontalLayout.setVerticalComponentAlignment(FlexComponent.Alignment.BASELINE, name, sayHello);
        horizontalLayout.add(name, sayHello);
        horizontalLayout.addClassNames(LumoUtility.Padding.MEDIUM, LumoUtility.Gap.MEDIUM);
        add(horizontalLayout);
    }
}
