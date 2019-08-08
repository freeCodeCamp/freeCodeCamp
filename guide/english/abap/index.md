---
title: ABAP
---

## What is ABAP?

ABAP stands for Advanced Business Application Programming and is a programming language used by SAP developers. SAP is an Enterprise Resource Planning system used by large companies. Its revenue could be compared to other tech giants like Microsoft and Apple. SAP Software is written in ABAP bytecode (compiled) which later on is interpreted by the C++ code of the kernel.

* C++ for the ABAP kernel
* ABAP for the ABAP stack
* Java for the Java stack

In the end, ABAP was used to build the ABAP compiler.

SAP in recent years has introduced HANA database. It is the recommended in-memory (RAM) database to run SAP applications on. It creates index and aggregates on the fly. This was previously not efficient with standard HDD based databases. "HANA is the in-house database powering many of SAP’s products. It is written in C++ with Python tests, and the entire code base lives inside of a single git repository. Hundreds of developers from all around the world are developing on about 10 million lines of C++ code and 15 million lines of Python tests. Since HANA is deployed on Linux exclusively, many developers are using Linux on their workstations as well. So far, Windows is still supported as a development environment but this will change in 2019, leaving Linux as the only choice. "Source: https://hookrace.net/blog/hana-cpp-development/, 2017, Dennis Felsing".  

ABAP is a robust programming language that allows the user to use object oriented concepts, inheritance, persistency, field symbols, and structures to put a user's code in any place of the SAP, ERP or Business Warehouse system. ABAP is a 4GL language developed specifically for the mass processing of data in business applications. This concept allows developers to put business logic inside, create reports, and expose and manipulate data.

ABAP can be used both in application and also executed directly on the database itself using ABAP Managed Database Procedures. This allows the user not to bring the data to the application layer and apply the logic directly in the database itself.

Official ABAP documentation can be found [here](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/index.htm).  

```ABAP
* Quick example of ABAP with Object Oriented Programming

* Example static class method definition
* Coments and documentation are written in HTML, later on in the code it can be displayed onmouse hover and using predefined keyboard shortcuts.

"! <p class="shorttext synchronized" lang="en">Filter some data based on the one column value.</p>
"! Filter RESULT_PACKAGE in map/derive/validate by package indicator relevant for re-processing

class Y_SAMPLE_CLASS definition
  public
  final
  create public .

public section.

" This method imports two values and changes one table
CLASS-METHODS flt_pck_4reprocessing
  IMPORTING pv_sourcesys   TYPE char2
            pv_some_desc    TYPE rsbkdtptext
  CHANGING  result_package TYPE INDEX TABLE.


METHOD filter_data_column.

  " Apply some constant to a variable, that is one of multiple ways of doing that dynamically, "lc_constant"'s type is created and fitted dynamically
  DATA(lc_constant) = 'If this string will be found, method will be executed. Otherwise check will exit the class.'.

  " Check if this method call provided an argument for this class to be executed 
  " Check if text value provided by the parameter contains pattern stored in previously created variable  
  CHECK pv_some_desc CP |*{ lc_constant }*| .

    " Use OPEN-SQL to look up data from system or user defined global tables 
    " internal variables and dynamically created tables are exited with @ / @DATA
    SELECT DISTINCT something FROM some_table
        WHERE counter = ( SELECT MIN( counter ) FROM
        some_table WHERE some_column = @pv_sourcesys )
      AND soursystem = @pv_sourcesys
        INTO @DATA(lv_yft_gen_repr_sel_pck).
    ENDSELECT.

  " Check if proper value was selected - if so, no deletion should happen
  CHECK lv_yft_gen_repr_sel_pck IS NOT INITIAL AND lv_yft_gen_repr_sel_pck NE '00'.

  " Loop at internal table given to the method assigning pointers - field symbols, apply filtering to it - if matches, than delete
  LOOP AT result_package ASSIGNING FIELD-SYMBOL(<fs_result_package>).
    "As this table has type 'any' - indexed table, than we have to assign specific column name of the structure to a field symbol
    ASSIGN COMPONENT 'NAME_OF_THE_COLUMN_WE_ARE_LOOKING_FOR' OF STRUCTURE <fs_result_package> TO FIELD-SYMBOL(<fs_NAME_OF_THE_COLUMN_WE_ARE_LOOKING_FOR>).
    CHECK <fs_gm1pck> IS ASSIGNED.
    IF <fs_gm1pck> NE lv_yft_gen_repr_sel_pck.
      DELETE result_package.
    ENDIF.
  ENDLOOP.
ENDMETHOD. 
```

## ABAP Execution Layers
* Presentation layer 
This layer is distributed to the end users and can be accessed both from WEB and from the SAP software itself. In ERP - ECC systems, this layer is when the user creates an invoice, order, executes reports.

* Application layer 
This layer on application servers. It constists of ABAP runtime environment in which ABAP programs are executed.

* Database layer
Consists of a database system in which the central dataset of an AS ABAP is saved.

## ABAP execution scenarios
ABAP programs can transfer data for processing from the database layer to the application layer, making it a bottom-up approach. This approach makes an application run a bit slower because it has to transfer the data between the servers. To speed up the processing, a top-town approach was introduced. It allows the user to write code that is going to send the instruction (procedure) to the database of how the data should be changed without having to fetch it into application layer. The code is still written in the application layer as a ABAP Managed Database Procedure, usually of type SQL Script.  
