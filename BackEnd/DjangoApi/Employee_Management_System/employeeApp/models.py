from django.db import models

# Create your models here.


class LeaveApplication(models.Model):
    L_Id=models.AutoField(primary_key=True)
    apply_Date = models.DateField()
    nature_Of_Leave = models.CharField(max_length=100)
    first_Day = models.DateField()
    last_Day = models.DateField()
    number_Of_Days = models.ImageField(max_length=100)