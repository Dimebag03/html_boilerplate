<%@ Page Title="" Language="C#" MasterPageFile="~/modulos/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" ViewStateMode="Disabled" Inherits="[className]" %>

<asp:Content ID="Content1" ContentPlaceHolderID="seo" runat="Server">
    <uc:ogtags runat="server" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    [metaTag]
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="conteudo" runat="Server"></asp:Content>