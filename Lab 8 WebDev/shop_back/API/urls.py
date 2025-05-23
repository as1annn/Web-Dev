from django.urls import path
from .views import ProductListView, ProductDetailView, CategoryListView, CategoryDetailView, ProductsByCategoryView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:id>/', ProductDetailView.as_view(), name='product-detail'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:id>/', CategoryDetailView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', ProductsByCategoryView.as_view(), name='category-products'),
]