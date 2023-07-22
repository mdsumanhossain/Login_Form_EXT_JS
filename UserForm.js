Ext.define('FirstApp.view.main.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',

    profiles: {
        classic: {
            width: 340,
            labelWidth: 110,
            bodyPadding: 5
        },
        neptune: {
            width: 340,
            labelWidth: 110,
            bodyPadding: 5
        },
        graphite: {
            width: 450,
            labelWidth: 170,
            bodyPadding: 5
        },
        'classic-material': {
            width: 450,
            labelWidth: 170,
            bodyPadding: '10 16'
        }
    },
    title: 'Number fields with spinner',
    bodyPadding: 5,
    frame: true,
    width: 340,
    defaultType: 'numberfield',

    fieldDefaults: {
        labelWidth: 110,
        anchor: '100%'
    },

    items: [{
        fieldLabel: 'Default',
        name: 'basic',
        value: 1,
        minValue: 1,
        maxValue: 125
    }, {
        fieldLabel: 'With a step of 0.4',
        name: 'test',
        minValue: -100,
        maxValue: 100,
        allowDecimals: true,
        decimalPrecision: 1,
        step: 0.4
    }, {
        hideTrigger: true,
        fieldLabel: 'Without spinner',
        name: 'without_spinner'
    },
    {
        xtype: 'button',
        text: 'Login',
        scale: 'medium',
        margin:'0 10 0 10'
    },
    {
        xtype: 'button',
       // iconCls: 'button-home-medium',
        text: 'Create Account',
        scale: 'medium',
        iconAlign: 'top'
    }]
});