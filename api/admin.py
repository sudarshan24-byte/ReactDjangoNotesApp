from django.contrib import admin
from .models import Note

# Register your models here.
@admin.register(Note)
class UserAdmin(admin.ModelAdmin):
    list_display = ( 'body_preview', 'updated')

    def body_preview(self, obj):
        return obj.body[:50] if len(obj.body) > 50 else obj.body