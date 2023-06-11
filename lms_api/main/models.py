from tabnanny import verbose
from django.db import models

# Create your models here.
class Teacher(models.Model):
    id = models.IntegerField    
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=100)
    skills = models.TextField()

    class Meta:
        verbose_name_plural = "1. Teacher"

class CourseCategory(models.Model):
    id = models.IntegerField
    title = models.CharField(max_length=150)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = "2. Course Categories"
        
    def __str__(self):
        return self.title

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    feature_img = models.ImageField(upload_to='course_imgs/', null=True)
    techs = models.TextField()

    class Meta:
        verbose_name_plural = "3. Course"

class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    mhs_id = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100)
    address = models.TextField()
    interested_categories = models.TextField()

    class Meta:
        verbose_name_plural = "4. Student"

    