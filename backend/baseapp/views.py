from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer


# from .products import products 

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    
    return Response('hello')


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    
    return Response(serializer.data)



@api_view(['GET'])
def getProduct(request, pk):
    item = Product.objects.filter(_id=pk).first()
    serializer = ProductSerializer(item, many=False)
    
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    return Response(serializer.data)