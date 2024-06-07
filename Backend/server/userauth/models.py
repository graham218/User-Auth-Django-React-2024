from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email_verified = models.BooleanField(default=False)
    role = models.CharField(max_length=255, choices=[('admin', 'Admin'), ('user', 'User')], default='user')

    def __str__(self):
        return self.username
