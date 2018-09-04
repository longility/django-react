from django.http import JsonResponse


def index(request):
    return JsonResponse(["Genesis", "Exodus", "Leviticus"], safe=False)