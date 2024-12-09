"use strict";
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Order {
    constructor(customer, date, status) {
        this.payment = new Cash(0, 0);
        this.orderDetails = [];
        this.customer = customer;
        this.date = date;
        this.status = status;
    }
    payOrder(payment) {
        this.payment;
    }
    addOrderDetail(orderDetail) {
        this.orderDetails.push(orderDetail);
    }
    calcSubtotal() {
    }
    calcTax() {
    }
    calcTotal() {
    }
    calcTotalWeight() {
    }
}
class OrderDetail {
    constructor(item, quantity, taxStatus) {
        this.item = item;
        this.quantity = quantity;
        this.taxStatus = taxStatus;
    }
    calcSubTotal() {
    }
    calcWeight() {
    }
    calcTax() {
    }
}
class Item {
    constructor(shippingWeight, description) {
        this.shippingWeight = shippingWeight;
        this.description = description;
    }
    getPriceForQuantity() {
    }
    getTax() {
    }
    inStock() {
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class Check extends Payment {
    constructor(amount, name, bankID) {
        super(amount);
        this.name = name;
        this.bankID = bankID;
    }
    authorized() {
    }
}
class Cash extends Payment {
    constructor(amount, cashTendered) {
        super(amount);
        this.cashTendered = cashTendered;
    }
}
class Credit extends Payment {
    constructor(amount, number, type, expDate) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }
    authorized() {
    }
}
