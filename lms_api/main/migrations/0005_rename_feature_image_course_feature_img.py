# Generated by Django 4.2.1 on 2023-06-11 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_course_feature_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='feature_image',
            new_name='feature_img',
        ),
    ]
