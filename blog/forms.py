# -*- encoding:utf8 -*-
from django import forms
from .models import Post
from .models import Comment

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'text',)

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('author', 'text',)

class RegistrationForm(forms.Form):
    username = forms.CharField(label='사용자 이름', max_length=30)
    email = forms.EmailField(label='이메일')
    password1 = forms.CharField(label='비밀번호',widget=forms.PasswordInput())
    password2 = forms.CharField(label='비밀번호(확인용)',widget=forms.PasswordInput())
    def clean_password2(self):
        if 'password1' in self.cleaned_data:
            password1 = self.cleaned_data['password1']
            password2 = self.cleaned_data['password2']
            if password1 == password2:
                return password2
        raise forms.ValidationError('비밀번호가 일치하지 않습니다.')