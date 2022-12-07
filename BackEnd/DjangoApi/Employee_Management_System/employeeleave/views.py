from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from employeeleave.models import LeaveApplication
from employeeleave.serializers import LeaveSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def leaveApi(request,id=0):
    if request.method=='GET':
        leave = LeaveApplication.objects.all()
        leave_serializer = LeaveSerializer( leave, many=True)
        return JsonResponse(leave_serializer.data, safe=False)

    elif request.method=='POST':
        leave_data=JSONParser().parse(request)
        leave_serializer = LeaveSerializer(data= leave_data)
        if leave_serializer.is_valid():
            leave_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        leave_data = JSONParser().parse(request)
        leave=LeaveApplication.objects.get(L_Id= leave_data['L_Id'])
        leave_serializer=LeaveSerializer( leave,data= leave_data)
        if  leave_serializer.is_valid():
            leave_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        leave=LeaveApplication.objects.get(DepartmentId=id)
        leave.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)