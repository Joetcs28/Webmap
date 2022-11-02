var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> วัดโบสถ์'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ชาติตระการ'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> นครไทย'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> บางกระทุ่ม'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> บางระกำ'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> พรหมพิราม'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> วังทอง'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> เนินมะปราง'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> เมืองพิษณุโลก'
            });
var format_142_10 = new ol.format.GeoJSON();
var features_142_10 = format_142_10.readFeatures(json_142_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_142_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_142_10.addFeatures(features_142_10);
var lyr_142_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_142_10, 
                style: style_142_10,
                interactive: true,
                title: '<img src="styles/legend/142_10.png" /> สานที่ 14 ห้างเส้นทรัลพลาซาพิษณุโลก - สำนักงานขนส่งจังหวัดพิษณุโลกแห่งที่2'
            });
var format_13_11 = new ol.format.GeoJSON();
var features_13_11 = format_13_11.readFeatures(json_13_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13_11.addFeatures(features_13_11);
var lyr_13_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_13_11, 
                style: style_13_11,
                interactive: true,
                title: '<img src="styles/legend/13_11.png" /> สายที่ 13 มหาวิทยาลัยราชภัฏพิบูลส่งคราม(ส่วนทะเลแก้ว) - องค์การบิหารส่วนตำบลสมอแข'
            });
var format_17_12 = new ol.format.GeoJSON();
var features_17_12 = format_17_12.readFeatures(json_17_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_12.addFeatures(features_17_12);
var lyr_17_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_12, 
                style: style_17_12,
                interactive: true,
                title: '<img src="styles/legend/17_12.png" /> สายที่ 17 สถานีรถไฟพิษณุโลก - วัดจุฬามณี - โรงเรียนพิษณุโลกพิทยาคม (แห่งใหม่)'
            });
var format_16_13 = new ol.format.GeoJSON();
var features_16_13 = format_16_13.readFeatures(json_16_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16_13.addFeatures(features_16_13);
var lyr_16_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_16_13, 
                style: style_16_13,
                interactive: true,
                title: '<img src="styles/legend/16_13.png" /> สายที่16 มหาวิทยาลัยนเรศวร(สนามบิน) - บึงพระ - มหาวิทยาลัยนเรศวร(ทุ้งหนองอ้อ)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr_142_10.setVisible(true);lyr_13_11.setVisible(true);lyr_17_12.setVisible(true);lyr_16_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr_142_10,lyr_13_11,lyr_17_12,lyr_16_13];
lyr__1.set('fieldAliases', {'Name': 'Name', });
lyr__2.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__3.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__4.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__5.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__6.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__7.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__8.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr__9.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'N31': 'N31', });
lyr_142_10.set('fieldAliases', {'id': 'id', });
lyr_13_11.set('fieldAliases', {'id': 'id', });
lyr_17_12.set('fieldAliases', {'ป้า�': 'ป้า�', });
lyr_16_13.set('fieldAliases', {});
lyr__1.set('fieldImages', {'Name': 'TextEdit', });
lyr__2.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__3.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__4.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__5.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__6.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__7.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__8.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr__9.set('fieldImages', {'Name': 'TextEdit', 'Number': 'TextEdit', 'N31': 'TextEdit', });
lyr_142_10.set('fieldImages', {'id': 'TextEdit', });
lyr_13_11.set('fieldImages', {'id': 'TextEdit', });
lyr_17_12.set('fieldImages', {'ป้า�': 'TextEdit', });
lyr_16_13.set('fieldImages', {});
lyr__1.set('fieldLabels', {'Name': 'no label', });
lyr__2.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__3.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__4.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__5.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__6.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__7.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__8.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr__9.set('fieldLabels', {'Name': 'no label', 'Number': 'no label', 'N31': 'no label', });
lyr_142_10.set('fieldLabels', {'id': 'no label', });
lyr_13_11.set('fieldLabels', {'id': 'no label', });
lyr_17_12.set('fieldLabels', {'ป้า�': 'no label', });
lyr_16_13.set('fieldLabels', {});
lyr_16_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});