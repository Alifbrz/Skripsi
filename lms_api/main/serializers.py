from rest_framework import serializers
from . import models

class TeacherSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id', 'full_name', 'email','password', 'qualification',  'mobile_no', 'skills']
        
class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id', 'title', 'description']
        
class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id', 'category', 'teacher', 'title', 'description', 'feature_img', 'techs']
        
        