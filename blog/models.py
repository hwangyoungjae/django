from django.db import models
from django.utils import timezone

class Post(models.Model):
    author=models.ForeignKey('auth.User')
    title=models.CharField(max_length=200)
    text=models.TextField()
    created_date=models.DateTimeField(default=timezone.now())
    published_date=models.DateTimeField(blank=True, null=True)
    def publish(self):
        self.published_date=timezone.now()
        self.save()
    def __str__(self):
        return self.title
    def approved_comments(self):
        return self.comments.filter(approved_comment=True)

class Comment(models.Model):
    post = models.ForeignKey('blog.Post', related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text

class Photo(models.Model):
    image_file=models.ImageField()
    filtered_image_file=models.ImageField()
    description=models.TextField(max_length=500)
    created_at=models.DateTimeField(auto_now_add=True)