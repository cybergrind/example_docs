.. _dyn_serializers:

Structs
=======

.. |required| replace:: [required]
.. |readonly| replace:: [ro]
.. |writeonly| replace:: [writeonly]
.. |nullable| replace:: [null]


.. dyn_serializer:: web/integration_api.serializers.StoreSerializerIntegration

**Store working_hours format** ::

    {
        "time_zone": "America/New_York",  // timezone names: https://www.iana.org/time-zones
        "schedule": {
            "mon": [["11:00AM", "10:00PM"]],  // Same day working time 11:00 - 22:00
            "tue": [["1:00PM", "1:00AM"]],  // Work after midnight 13:00 Today - 01:00 Next day
            "wed": [["9:00AM", "12:00AM"], ["1:00AM", "3:00AM"]],  // Break after midnight
            "thu": [["9:00AM", "1:00PM"], ["2:00PM", "10:00PM"]],
            "fri": [["9:00AM", "10:00PM"]],
            "sat": [["9:00AM", "10:00PM"]],
            "sun": [["10:00AM", "6:00PM"]]
        },
        "holidays": {
            "2018-10-26": [["11:00AM", "6:00PM"]],  // Custom schedule for holiday
            "2018-10-04": []  // Store doesn't work this day
        }
    }


** Store delivery_zones format** ::

    [
        {
            'id': 1,
            'name': 'Wet',
            'description': 'Delivery zone, where wines are allowed',
            'polygons': [
                [
                    [-71.4131927, 41.8547734],
                    [-71.4350295, 41.8102200],
                    [-71.3582740, 41.8122032],
                    [-71.3425198, 41.8447569],
                    [-71.4133644, 41.8546029],
                ],
                [
                    [-71.3434982, 41.8762716],
                    [-71.352725, 41.8781249],
                    [-71.3656855, 41.8806492],
                    [-71.3341084, 41.8612513],
                    [-71.3434982, 41.8762716],
                ],
            ],
        },
        {
            'id': 2,
            'name': 'Dry',
            'description': 'Delivery zone, where only beers or non-alcohol products are allowed',
            'polygons': [
                [
                    [-71.3434982, 41.8762716],
                    [-71.352725, 41.8781249],
                    [-71.3656855, 41.8806492],
                    [-71.3378849, 41.87314],
                    [-71.3434982, 41.8762716],
                ],
            ]
        }
    ]


.. dyn_serializer:: ordermanagement/order.serializers.OrderSerializer
.. dyn_serializer:: ordermanagement/order.serializers.ProductSerializer
.. dyn_serializer:: web/api.serializers.FTSSerializer
.. dyn_serializer:: web/core.serializers.AvailableToBuyInventory
.. dyn_serializer:: web/core.serializers.CountryDynSerializer
.. dyn_serializer:: web/core.serializers.DesignationDynSerializer
.. dyn_serializer:: web/core.serializers.DrinkDynSerializer
.. dyn_serializer:: web/core.serializers.DrinkProducerDynSerializer
.. dyn_serializer:: web/core.serializers.DrinkTagDynSerializer
.. dyn_serializer:: web/core.serializers.RegionDynSerializer
.. dyn_serializer:: web/core.serializers.SubRegionDynSerializer
.. dyn_serializer:: web/core.serializers.UserFavoriteDynSerializer
.. dyn_serializer:: web/core.serializers.UserReviewDynSerializer
.. dyn_serializer:: web/core.serializers.VarietalDynSerializer
.. dyn_serializer:: web/core.serializers.VineyardDynSerializer
.. dyn_serializer:: web/core.serializers.WineDynSerializer
.. dyn_serializer:: web/core.serializers.WineryDynSerializer
.. dyn_serializer:: web/integration_api.serializers.BaseRetailInvUpdateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailDrinkCreateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailDrinkDynSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailInvExtIdBulkCreateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailInvExtIdBulkUpdateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailInvExtIdUpdateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailWineCreateSerializer
.. dyn_serializer:: web/integration_api.serializers.RetailWineDynSerializer
.. dyn_serializer:: web/retail.serializers.InventorySerializer
.. dyn_serializer:: web/retail.serializers.RetailGroupSerializer
