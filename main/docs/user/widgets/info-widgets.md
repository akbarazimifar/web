--- 
sidebar_position: 3
title:  Informational widgets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

Information widgets are needed for quick access to information important to the user. This can be data on speed, weather, parking position, data from external sensors, and much more. Widgets can be configured according to the user's specific requirements, enabling their visibility on the application screen or disabling them if necessary.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## Altitude widgets  

Altitude widgets display the height above the sea level of the current geolocation and the elevation of the map center.  


### Altitude: current location  
  
:::note  
Altitude can not be displayed correctly on some Android devices. To resolve this problem, download an altitude correction map: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Altitude widget Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Altitude widget iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  


| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| By tapping | No changes |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |  


### Elevation: map center

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Elevation widget iOS](@site/static/img/widgets/elevation_widget_ios.png) 

</TabItem>

</Tabs>   

You can use the widget to find out the elevation of the current map center above sea level.
[Download](../start-with/download-maps.md) heightmaps of the required area to display information in the *Elevation: map center widget*.  

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_altitude_map_center"/>* | 
| By tapping | No changes |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* | 


## Current time

![Current time widget](@site/static/img/widgets/current_time_widget.png)    

This widget displays the current time taken from your device.  

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_plain_time"/>* |
| By tapping | No changes |
| Format | Time & Format is configured by device settings. |


## Current speed

![Speed widget](@site/static/img/widgets/current_speed_widget.png)  

The widget shows the current speed detected by the GPS sensor.  

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_current_speed"/>* |
| By tapping  | No changes |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Average speed 

<InfoAndroidOnly />

![Average speed widgets](@site/static/img/widgets/average_speed_widget.png)  

This widget shows your average speed for a selected time interval and does not require any other features such as track recording or navigation. You can easily use it to check if your average speed is in line with highway speed limits, or record your average speed for the last 5-15 minutes of cycling.    

Tap the **Settings** button of the Average Speed widget to select the time interval and the stop on/off option.   

**Time interval**  
The average speed is calculated for a given time interval according to your selection. Thus, you can set the average speed calculation interval from 15 seconds to 60 minutes. In general, the average speed is taken from the recorded GPS points: ```Average Speed = AVERAGE(GPS_LOCATION.speed)```.  


**Take stops into account**  
***Off*** *setting*. A long stop will also add zeros to the average speed calculation, which can significantly change the overall value.   
***On*** *setting*. If your average speed is less than 1 speed unit per hour, this value will not be added to the average speed calculation. This allows your average speed to not change much when you stop, for example at a traffic light or want to take a break from cycling.    

![Average speed](@site/static/img/widgets/average_speed_widget_2.png) ![Average speed](@site/static/img/widgets/average_speed_widget_3.png)  


| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_average_speed"/>* |
| By tapping | No changes |   


## Glide ratio

<InfoAndroidOnly />  

The widgets show the glide ratio to the target or the average glide ratio for the current flight.   

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → Glide ratio* |
| By tapping | No changes |


## Battery level

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)  

This widget shows the battery level of your device.

| | |
|------------|------------|
Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_battery"/>* |
| By tapping | No changes |


## Coordinates widget

There are 2 coordinates widgets:

- *Coordinates: map center* - shows the geographic coordinates of the current map center.
- *Coordinates: current location* (Android) or *Coordinates widget* (iOS) - shows the geographic coordinates of current geolocation.

Coordinates widgets are displayed at the top of the screen. Icons with a green background show the latitude and longitude of the point in the center of the visible part of the map, and those with a blue background show the coordinates of your current location. Information about supported *Сoordinates formats* can be found in the *[Search coordinates article](../search/search-coordinates.md#coordinate-format)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_ios.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

| | |
|------------|------------|
| Enable | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,top_widgets_panel"/>* |
| By tapping | Copies the coordinates to the clipboard |
| Format | <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) or <Translate android="true" ids="configure_profile"/> (Android) →<br/><Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/> |


## GPS Info  

<InfoAndroidOnly /> 

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)     

The GPS (Global Positioning System) information widget shows the number of satellites that the device is currently detecting and using. You can use it to check the GPS status in case of a poor signal.  

You can reset the current GPS cache through: 
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_gps_info"/>* |  
| By tapping | Opens the GPS status menu with third-party tools to configure the on-board GPS device. |  


## Sunset and sunrise

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Sunset and sunrise widgets](@site/static/img/widgets/sunset_rise_widgets.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sunset and sunrise widgets](@site/static/img/widgets/sunset_rise_widgets_ios.png)
 
</TabItem>

</Tabs>  

Sunset and sunrise widgets show the time of the next sunrise or sunset for the center of the map. Widgets can also display the remaining time (*time left*) until the expected sunset/sunrise (also for the center of the map). In both cases *time* or *time left* is indicated by the device time.    

| | |
|------------|------------|
| Enable | **Android** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_group_sunrise_sunset"/>* |
|   |  **iOS** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_sunrise"/> / <Translate ios="true" ids="map_widget_sunset"/>* |
| By tapping | Switch between *Time left* and the Time of the next sunrise/sunset.|  


## Radius ruler

:::note  
You can read a more detailed description here: **[Radius ruler and Ruler](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table> 


</TabItem>

</Tabs>

The Radius Ruler widget shows the distance between your location and the center point of the Radius Ruler. The radius of the first circle is equal to [the map scale](../widgets/radius-ruler.md#ruler).

| | |
|------------|------------|
Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_ruler_control"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_ruler_control"/>* |
| By tapping | Сhanges widget state between the black scale, the grey one and non-visible modes. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## * Trip recording widgets  

:::note  
You can read a more detailed description here: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png) 

</TabItem>

<TabItem value="ios" label="iOS">   

![trip_recording_widget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>   

Trip recording widgets refer to [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md#widgets). You can use widgets to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill*.    

| | |
|------------|------------|
| Enable | **Android**: *Menu → Configure screen → Widgets → Left / Right panel → Trip recording* |
|   |  **iOS**: *Menu → Configure screen → Widgets → Left / Right panel → Trip recording* |
| By tapping | Starts/Stop track recording or View the graph. |


## * External sensors widgets

<InfoAndroidOnly />

Widgets refer to [External sensors plugin](../plugins/external-sensors.md#widgets). You can use them to view brief information from your external sensors, such as: *<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>, <Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>* and *<Translate android="true" ids="external_device_characteristic_temperature"/>*.  

- To add External sensor widgets to the left/right side of the map screen, [enable](../plugins/index.md#enable--disable) **OsmAnd External sensors plugin**.
- Widgets can be added even if there is no external sensor connected.
- All added widgets are visible even if no external sensor is connected.
- If a sensor has not been added or you need to edit the widget, tap the required widget field in the list and then on *Settings*, or directly on the *Settings icon* in the list.
- The data displayed in widgets can be recorded using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).

![External sensor widgets Android](@site/static/img/widgets/external-sensors-widgets.png) 

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>* |
| By tapping | No changes |   


## * Weather widgets

:::note  
Weather widgets can be added to the map screen only when OsmAnd [Weather plugin](../plugins/weather.md) is enabled.  
:::

The Weather widgets display the current weather information for the central point on the map. The Weather widgets are automatically enabled on the [Weather screen](../plugins/weather.md#weather-forecast-screen). They can also be placed on the main screen for everyday use ([see](../plugins/weather#weather-widgets)).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Weather widget Android](@site/static/img/widgets/weather_widgets_andr.png) 

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Left / Right panel → Weather* |  
| By tapping | When the development plugin is enabled, weather forecast information is displayed in a pop-up notification.|
| Format | *Menu → Plugins → Weather → Settings or *Menu → Settings → App Profile → Weather* |  

</TabItem>

<TabItem value="ios" label="iOS">

![Weather widget iOS](@site/static/img/widgets/weather_widgets_ios.png)

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Right panel → Temperature (Pressure, Wind, Cloud, Precipitation*)* |
| By tapping | No changes.|
| Format | *Main menu → Global Settings → Profile → Weather* |

</TabItem>

</Tabs>


## * Parking widget

:::note  
Parking widget can be added to the map screen only when OsmAnd [**Parking position plugin**](../plugins/parking.md) is enabled.  
:::  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)  

This is a Parking plugin widget that shows the distance from the center of the screen to the parking location.    

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_parking"/>* |
| By tapping | Moves map view to the parking position. |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## * Mapillary widget

:::note  
Mapillary widget can be added to the map screen only when OsmAnd [Mapillary plugin](../plugins/mapillary.md) is enabled.  
:::  

This is a Mapillary plugin widget that provides quick access to Mapillary app to add Street-Level-Imagery.

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png) 

| | |
|------------|------------|
| Enable | **Android**: Menu → Configure screen → Left / Right panel → Mapillary |
|  | **iOS**: Menu → Configure screen → Right panel → Mapillary |
| By tapping | Opens Mapillary application. |


## * Audio/video notes widget

:::note  
Widgets can only be added to the map screen when the OsmAnd [**Audio/video notes plugin**](../plugins/audio-video-notes.md) is enabled. 
:::   

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

These are Audio/video notes plugin widgets that provide quick access to start/stop taking audio, video, or photo notes.  

You can configure which action is selected by default:    

- *On request*. Default state. Every time the action selection dialog is displayed. 
- *Record audio* - records an audio note.
- *Record video* - allows you to record a video.
- *Take a photo* - allows you to take a photo.  

| | |
|------------|------------|
| Enable | **Android**: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_widget_av_notes"/>*  |
| By tapping | Start / stops taking a note  |


## * Tracker widget

<InfoAndroidOnly />

:::note  
Tracker widget can be added to the map screen only when [OsmAnd Tracker plugin](../plugins/osmand-tracker.md) is enabled.  
:::  

For the plugin and widget to work, you need to install [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)** from Google Play or other sources.  

This OsmAnd Tracker plugin widget is used to quickly access the OsmAnd Tracker app and share your location information with other users. It shows whether connection is online or offline and if sharing location is enabled, then the time since last successful sending is dispalyed.

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,tracker_item"/> |
| By tapping | Opens OsmAnd Tracker app. |


## * Developer widgets

:::note  
Developer Widgets can be added to the map screen only when OsmAnd [Development plugin](../plugins/development.md) is enabled.  
:::

Developer Widgets are used to get information about map [rendering speed](../plugins/development.md#fps-widget) and virtual camera position: [zoom level](../plugins/development.md#zoom-level), [distance](../plugins/development.md#distance-to-target) to map center, camera [elevation](../plugins/development.md#camera-elevation) and [incline](../plugins/development.md#camera-tilt).  


### FPS widget

The [FPS Widget](../plugins/development.md#fps-widget) shows how fast the map and map elements are displayed and refreshed: the higher the rendering speed, the greater the quantitative values in frames per second.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)  

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Developer widgets |  
| By tapping | No changes.|

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Right panel → FPS widget* |
| By tapping | No changes |

</TabItem>

</Tabs>


### Camera widgets  

Camera widgets can be used to compare the OsmAnd map and the earth's surface. There are four Camera widgets: [Camera tilt widget](../plugins/development.md#camera-tilt), [Camera Elevation widget](../plugins/development.md#camera-elevation), [Zoom level widget](../plugins/development.md#zoom-level) and [Distance from camera to target widget](../plugins/development.md#distance-to-target).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera position widgets](@site/static/img/widgets/camera_position_widgets.png)

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Left / Right panel → Developer widgets* |
| By tapping | No changes |  

</TabItem>

<TabItem value="ios" label="iOS">

![Camera position Widgets 2](@site/static/img/widgets/camera_position_widgets_ios.png)


| | |
|------------|------------|
| Enable | *Menu → Configure screen → Right panel → Developer widgets* |
| By tapping | No changes |  

</TabItem>

</Tabs>
 
