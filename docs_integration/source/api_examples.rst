For API clients
===============


General information
^^^^^^^^^^^^^^^^^^^

* Right now our database contains 330000+ validated wines and 30000+ drinks.
* We support batch upload and download when you need synchronize many items and avoid multiple api requests
* You can use text search API's to find required products
* You can use our backend in your product or download and cache data on your side
* Website example https://wa-testapp.gettipsi.com/store?storeId=19830
* All documentation can be found here: https://api-docs.gettipsi.com/


Wine data example
^^^^^^^^^^^^^^^^^

You can find all hierarchy for wine here: :ref:`InventorySerializer` + :ref:`WineDynSerializer`

.. code-block:: json

    {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
        {
          "id": 498102,
          "inventory": {
            "batch_price": [],
            "price": "8.99",
            "id": 498102,
            "old_price": null,
            "in_stock": 2,
            "pack_size": 1,
            "unit_size": "750ml",
            "on_sale": false,
            "note": "",
            "value_pick": false,
            "extra": {
              "tax": "6.625"
            },
            "staff_pick": false,
            "wine": {
              "pro_rating": [],
              "country": {
                "description": "",
                "name": "Italy",
                "image_url": "https://testtipsiphotos.s3.amazonaws.com/countries/Italy_main_map.png?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=xmdKOdCz3gl8qIEYLDMK%2B2cL8NA%3D&Expires=1874928053"
              },
              "sub_regions": [],
              "name": "Villa Jolanda Moscato & Strawberry Muscat",
              "id": 680564,
              "style_scoring": [],
              "label_url": "https://tipsiphotos.s3.amazonaws.com/image_upload/2019-01-25/24baa5ef-cdf3-4b0d-8ff9-a185f6821042.JPG?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=%2Bup3AZNQYMhwyn4G1YctRH0zAGw%3D&Expires=1863788098",
              "avg_review": {
                "count": 16,
                "value": 3.25
              },
              "vintage": "NV",
              "designation": {
                "description": "",
                "name": "Moscato & Strawberry"
              },
              "region": null,
              "winemakers_note": "\"Tasting Notes:\nColor: Brilliant, Intense, Verging on rose.\n\nPerlage: Fine and persistent.\n\nNose: Intense and aromatic fragrance of wine and strawberry fruit.\n\nPalate: Aromatic, delicate and sweet, persistent taste.\" - Villa Jolanda",
              "user_review": [],
              "type": "sparkling",
              "user_favorite": [],
              "vintage_note": "none",
              "varietals": [
                {
                  "description": "Muscat can vary greatly from a light and dry to sweet and thick depending on techniques applied by the wine maker.  The wine's aroma typically exhibits hints of fresh grapes, peach and roses.",
                  "name": "Muscat"
                }
              ],
              "thumb_product_url": "https://tipsiphotos.s3.amazonaws.com/image_upload/2016-07-09/f441a4c2-4aac-4eed-b6dd-8b224ca82f67_thumb_product_url.jpg?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=zfZUPFNxEtUbA7bxVxFSJHIfp7Q%3D&Expires=1857751839"
            },
            "external_id": "19476"
          }
        }
      ]
    }


Drink data example
^^^^^^^^^^^^^^^^^^

You can find all hierarchy for drink here: :ref:`InventorySerializer` + :ref:`DrinkDynSerializer`


.. code-block:: json

    {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
        {
          "id": 496877,
          "inventory": {
            "batch_price": [],
            "price": "15.77",
            "id": 496877,
            "old_price": null,
            "in_stock": 270,
            "drink": {
              "description": "Budweiser, an American-style lager, was introduced in 1876 when company founder Adolphus Busch set out to create the United States’ first truly national beer brand – brewed to be universally popular and transcend regional tastes. Each batch of Budweiser follows the same family recipe used by five generations of Busch family brewmasters. 5% ABV\r\n\r\nTaste Notes: \r\nFresh and subtle fruit notes, a delicate malt sweetness and balanced bitterness for a clean, snappy finish. Budweiser is a medium-bodied, flavorful, crisp and pure beer with blended layers of premium American and European hop aromas, brewed for the perfect balance of flavor and refreshment. \r\n\r\nIngredients/Brewing: \r\nBudweiser is brewed using a blend of imported and classic American aroma and bittering hops, a blend of barley malts and rice. The lager undergoes a 30-day brewing process that includes the time-honored methods of “kraeusening” for natural carbonation and Beechwood aging, to create its\r\nunparalleled balance, character, and signature crisp finish. \r\n\r\nInteresting Fact: \r\nBudweiser was introduced in 1876 when company founder Adolphus Busch set out to create the United States’ first truly national beer brand – brewed to be universally popular and transcend regional tastes. \r\n\r\nEach batch of Budweiser follows the same family recipe used by five generations of Busch family brewmasters.",
              "country": {
                "description": "",
                "name": "United States",
                "image_url": "https://testtipsiphotos.s3.amazonaws.com/countries/USA_1-main_map.png?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=Xgi7A46ACIvZ7O%2BdhY80U2srBIM%3D&Expires=1874928098"
              },
              "name": "Budweiser",
              "id": 1851,
              "avg_review": {
                "count": 1,
                "value": 5
              },
              "label_url": "https://tipsiphotos.s3.amazonaws.com/image_upload/2018-05-15/f44e37d1-7f4e-4573-9453-65c3773615e3.jpg?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=YAGnrbNWHmW97iIGKQ%2BSTMaIqME%3D&Expires=1841758440",
              "tag": {
                "name": "American Lager"
              },
              "drink_type": "beer",
              "user_review": [],
              "user_favorite": [],
              "producer": {
                "description": "",
                "name": "Anheuser-Busch Companies, LLC.",
                "id": 60
              },
              "thumb_product_url": "https://tipsiphotos.s3.amazonaws.com/image_upload/2018-05-15/f44e37d1-7f4e-4573-9453-65c3773615e3_thumb_product_url.jpg?AWSAccessKeyId=AKIAIV6N7RGZXAP7HFMA&Signature=MPhuikiVbly13EK%2BnhObAF314ug%3D&Expires=1845468667"
            },
            "pack_size": 18,
            "unit_size": "12 oz",
            "on_sale": false,
            "note": "",
            "value_pick": false,
            "extra": {
              "tax": "6.625"
            },
            "staff_pick": false,
            "external_id": "20421"
          }
        }
      ]
    }

