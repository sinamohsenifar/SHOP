from django.contrib import admin
from .models import *




@admin.register(Product)
class ProuctAdmin(admin.ModelAdmin):
    list_display = ('name','brand','category', 'price', 'countInStock', 'createdAt')


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product','user', 'name', 'rating')


@admin.register(Order)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user','paymentMethod', 'totalPrice', 'isPaid', 'paidAt', 'isDelivered', 'deliveredAt', 'isSent', 'createdAt')
    
@admin.register(OrderItem)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product','order', 'name', 'quantity', 'price')

@admin.register(ShippingAddress)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('order','postalCode', 'country', 'shippingPrice')