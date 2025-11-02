'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Bell, Lock, Mail, Save } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SettingsPage() {
    const { toast } = useToast();
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        smsNotifications: false,
    });

    const handleSave = () => {
        // In a real app, this would save the settings to the user's profile in the database.
        console.log('Saving settings:', settings);
        toast({
            title: 'Settings Saved',
            description: 'Your notification preferences have been updated.',
        });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight font-headline">Settings</h2>
                <p className="text-muted-foreground">Manage your account and notification preferences.</p>
            </div>
        
            <Card>
                <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                        Choose how you want to be notified about urgent requests and donation opportunities.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <Label htmlFor="email-notifications" className="font-semibold">Email Notifications</Label>
                                <p className="text-sm text-muted-foreground">Receive updates via your registered email.</p>
                            </div>
                        </div>
                        <Switch
                            id="email-notifications"
                            checked={settings.emailNotifications}
                            onCheckedChange={(checked) => setSettings(s => ({...s, emailNotifications: checked}))}
                        />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                            <Bell className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <Label htmlFor="push-notifications" className="font-semibold">Push Notifications</Label>
                                <p className="text-sm text-muted-foreground">Get instant alerts on your device.</p>
                            </div>
                        </div>
                        <Switch
                            id="push-notifications"
                            checked={settings.pushNotifications}
                            onCheckedChange={(checked) => setSettings(s => ({...s, pushNotifications: checked}))}
                        />
                    </div>
                    <Button onClick={handleSave} className="w-full md:w-auto">
                        <Save className="mr-2 h-4 w-4" />
                        Save Preferences
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Account Security</CardTitle>
                    <CardDescription>
                        Manage your account security settings.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <Button variant="outline">
                        <Lock className="mr-2 h-4 w-4" />
                        Change Password
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
